export function generateAllowedAttributesDropDownOptions(array) {

  let dropdwonOptions=[];

  array.map((element) => {
        dropdwonOptions.push({id: element.id, text: element.attributeValue, value: element._links.self.href});
  });

  return dropdwonOptions;

}
