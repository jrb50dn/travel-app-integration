# Run `travefy_xml_json` in the terminal

# Note: Python is lazy loaded so the first run will take a moment,
# But after cached, subsequent loads are super fast! ⚡️

import platform
import xml.etree.ElementTree as ET
import json
import re


xml_file = 'tour_plan_data.xml'

# Open the file and read the contents as a string
with open(xml_file, 'r', encoding='utf-8') as file:
    xml_string = file.read()

#uncomment the below line and copy from this line to zapier
# xml_string = input_data.get('xml', '');

# Function to remove invalid tags and comments

# Function to remove invalid tags and comments
def remove_invalid_tags_and_comments(input_string):
    # Define a pattern that matches the specified tags (opening tags, even if not closed)
    tag_pattern = r'<nts:(gea|inf|tin|sit|nte|loc|vou|RIN)[^>]*>'
    
    # Define a pattern to match HTML comments <!-- ... -->
    comment_pattern = r'<!--.*?-->'
    
    # Substitute the found tags and comments with an empty string
    cleaned_string = re.sub(tag_pattern, '', input_string)
    cleaned_string = re.sub(comment_pattern, '', cleaned_string)
    
    escaped_data = (
        cleaned_string.replace("&", "&amp;")
    )
    return escaped_data
 

# Clean the XML data by removing invalid tags and comments
cleaned_xml_data = remove_invalid_tags_and_comments(xml_string)

# Parse the escaped XML string
try:
    root = ET.fromstring(cleaned_xml_data)
except ET.ParseError as e:
    print(f"Error parsing XML: {e}")
    exit(1)

# Helper function to handle mixed content (text + children) and attributes
# Helper function to handle mixed content (text + children) and attributes
def xml_to_dict(element):
    # If the element has no children and no attributes, just return its text
    if len(element) == 0 and not element.attrib:
        return element.text.strip().replace('"', '&quot;') if element.text else None
    
    data = {}

    # Handle element attributes
    if element.attrib:
        data['@attributes'] = element.attrib

    # Mixed content handling (text + children)
    if element.text and element.text.strip():
        data['#text'] = element.text.strip().replace('"', '&quot;')

    # Handle child elements
    children = list(element)
    if children:
        child_data = {}
        for child in children:
            child_dict = xml_to_dict(child)

            # Handle lists that need to be flattened
            if child.tag in ['Travellers', 'RoomConfigs', 'TripDays', 'TripEvents', 'Inclusions', 'TravellerAssignments']:
                if child.tag not in data:
                    data[child.tag] = []

                # If the child itself has child elements (e.g., RoomConfig, TripDay), append them directly
                if isinstance(child_dict, dict) and len(child_dict) == 1 and list(child_dict.keys())[0] in ['RoomConfig', 'TripDay', 'Traveller', 'TripEvent', 'Included', 'TravellerAssignment']:
                    # Directly append inner list elements to the parent array
                    list_items = child_dict[list(child_dict.keys())[0]]
                    if isinstance(list_items, list):
                        data[child.tag].extend(list_items)
                    else:
                        data[child.tag].append(list_items)
                else:
                    data[child.tag].append(child_dict)
            else:
                # Handle multiple children with the same tag (e.g., a list of items)
                if child.tag not in child_data:
                    child_data[child.tag] = child_dict
                else:
                    # Convert to list if there are multiple children with the same tag
                    if not isinstance(child_data[child.tag], list):
                        child_data[child.tag] = [child_data[child.tag]]
                    child_data[child.tag].append(child_dict)
        data.update(child_data)
    
    return data


# Convert XML to dictionary
xml_dict = xml_to_dict(root)

# Convert dictionary to JSON format for better readability (optional)
try:
    # Attempt to validate the JSON
    json_data = json.dumps(xml_dict, indent=4)  # Convert dictionary to JSON string
    json.loads(json_data)  # Validate the JSON by attempting to load it
    output['json'] = json_data  # If valid, assign it to the output
except ValueError as e:
    print(f"Invalid JSON data: {e}")
    # Handle invalid JSON (e.g., log the error, set an error message in output)
    output['json'] = None