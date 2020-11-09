const fs = require('fs');
const fieldMetadata = JSON.parse(fs.readFileSync('./metadata.json', { encoding: 'utf-8' }));
const schema = {
    "seq": 1,
    "version": 2,
    "nextTypeId": 2,
    "types": {
        "A": {
            "nextFieldId": 23,
            "caption": "Table1",
            "captions": {},
            "hidden": false,
            "fields": {
                "A": {
                    "base": "fn",
                    "caption": "Formula",
                    "captions": {},
                    "required": false,
                    "order": 0,
                    "formWidth": 0.25,
                    "uuid": "TAbgxTe917nhCuLq",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "fn": "",
                    "height": 1
                },
                "B": {
                    "base": "string",
                    "caption": "Text",
                    "captions": {},
                    "required": false,
                    "order": 1,
                    "formWidth": 0.5,
                    "uuid": "JyslDtWPPFRqdECJ",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "stringAutocorrect": true,
                    "stringMultiline": false,
                    "height": 1
                },
                "C": {
                    "base": "string",
                    "caption": "Text (multiline)",
                    "captions": {},
                    "required": false,
                    "order": 2,
                    "formWidth": 1,
                    "uuid": "QI6lZHMuSkm0EEkr",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "stringAutocorrect": true,
                    "stringMultiline": true,
                    "height": 4
                },
                "D": {
                    "base": "html",
                    "caption": "Rich text",
                    "captions": {},
                    "required": false,
                    "order": 3,
                    "formWidth": 1,
                    "uuid": "ECQk7GNIKl7hjXPR",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "height": 5
                },
                "E": {
                    "base": "number",
                    "caption": "Number",
                    "captions": {},
                    "required": false,
                    "order": 4,
                    "formWidth": 0.25,
                    "uuid": "GVFy4Vk61H4GgXG5",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "F": {
                    "base": "boolean",
                    "caption": "Yes / No",
                    "captions": {},
                    "required": false,
                    "order": 5,
                    "formWidth": 0.25,
                    "uuid": "pfgkc0ef3KRZ3iJe",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "booleanRenderer": "combo"
                },
                "G": {
                    "base": "choice",
                    "caption": "Choice",
                    "captions": {},
                    "required": false,
                    "order": 6,
                    "formWidth": 0.25,
                    "uuid": "nFx1uKemIjZPAiRv",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "nextChoiceId": 3,
                    "values": {
                        "1": {
                            "caption": "AD",
                            "captions": {},
                            "order": 0
                        },
                        "2": {
                            "caption": "QW",
                            "captions": {},
                            "order": 1
                        }
                    },
                    "choiceRenderer": "combo"
                },
                "H": {
                    "base": "multi",
                    "caption": "Multiple choice",
                    "captions": {},
                    "required": false,
                    "order": 7,
                    "formWidth": 0.25,
                    "uuid": "uc2o8Jl9C2jjmEvZ",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "nextChoiceId": 3,
                    "values": {
                        "1": {
                            "caption": "QWE",
                            "captions": {},
                            "order": 0
                        },
                        "2": {
                            "caption": "ASD",
                            "captions": {},
                            "order": 1
                        }
                    },
                    "multiRenderer": "switch"
                },
                "I": {
                    "base": "date",
                    "caption": "Date",
                    "captions": {},
                    "required": false,
                    "order": 8,
                    "formWidth": 0.25,
                    "uuid": "xseggi4KdA6waGO2",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "dateCalendar": true,
                    "dateYearly": false
                },
                "J": {
                    "base": "time",
                    "caption": "Time",
                    "captions": {},
                    "required": false,
                    "order": 9,
                    "formWidth": 0.25,
                    "uuid": "gKriuMs1rK0Ggjjn",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "timeFormat": "auto"
                },
                "K": {
                    "base": "timestamp",
                    "caption": "Date / Time",
                    "captions": {},
                    "required": false,
                    "order": 10,
                    "formWidth": 0.5,
                    "uuid": "vAqrvoyQXpJr9tcu",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "L": {
                    "base": "timeinterval",
                    "caption": "Time interval",
                    "captions": {},
                    "required": false,
                    "order": 11,
                    "formWidth": 0.25,
                    "uuid": "E30fDnzlbIoG798i",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "timeintervalFormat": "DHMSX"
                },
                "M": {
                    "base": "appointment",
                    "caption": "Appointment",
                    "captions": {},
                    "required": false,
                    "order": 12,
                    "formWidth": 0.5,
                    "uuid": "sKoJwLGJ4P3hdbX3",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "dateCalendar": true
                },
                "N": {
                    "base": "file",
                    "caption": "Image",
                    "captions": {},
                    "required": false,
                    "order": 13,
                    "formWidth": 0.5,
                    "uuid": "bgpZAEXEmhQIiW14",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "height": 3,
                    "fileHandling": "any",
                    "bgSize": "contain"
                },
                "O": {
                    "base": "file",
                    "caption": "Signature",
                    "captions": {},
                    "required": false,
                    "order": 14,
                    "formWidth": 0.5,
                    "uuid": "UBmJVJBWaTLCmtTx",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "height": 3,
                    "fileHandling": "signature",
                    "bgSize": "contain"
                },
                "P": {
                    "base": "link",
                    "caption": "URL",
                    "captions": {},
                    "required": false,
                    "order": 15,
                    "formWidth": 1,
                    "uuid": "K0je3l9iCFGK4214",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "linkPreview": false
                },
                "Q": {
                    "base": "email",
                    "caption": "Email",
                    "captions": {},
                    "required": false,
                    "order": 16,
                    "formWidth": 1,
                    "uuid": "lbOu0adXxB26W769",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "R": {
                    "base": "phone",
                    "caption": "Phone",
                    "captions": {},
                    "required": false,
                    "order": 17,
                    "formWidth": 0.5,
                    "uuid": "cEbyA6W2cYkJbZKT",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "S": {
                    "base": "location",
                    "caption": "Location",
                    "captions": {},
                    "required": false,
                    "order": 18,
                    "formWidth": 0.5,
                    "uuid": "gFLWze7zk70JHUtv",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "T": {
                    "base": "color",
                    "caption": "Color",
                    "captions": {},
                    "required": false,
                    "order": 19,
                    "formWidth": 0.25,
                    "uuid": "LYFF89F9HteH9kiO",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "U": {
                    "base": "icon",
                    "caption": "Icon",
                    "captions": {},
                    "required": false,
                    "order": 20,
                    "formWidth": 0.25,
                    "uuid": "rBpxKARfTzp8FvKp",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {}
                },
                "V": {
                    "base": "user",
                    "caption": "User",
                    "captions": {},
                    "required": false,
                    "order": 21,
                    "formWidth": 0.25,
                    "uuid": "ORJ2zaPbXHOi2CXH",
                    "globalSearch": true,
                    "hasIndex": false,
                    "tooltips": {},
                    "choiceRenderer": "combo"
                }
            },
            "uis": {},
            "uuid": "fJL4BUoTl5z8WGts",
            "globalSearch": true,
            "order": 0
        }
    }
}
let someObject = {
    common: [],
};

for (let fieldProp in fieldMetadata) {
    const fieldPropMetadata = fieldMetadata[fieldProp];
    if (fieldPropMetadata.occurence === 22) {
        // common
        someObject.common.push({ name: fieldProp, type: getTypeOf(fieldProp, fieldPropMetadata.availableOnFids[0]) })
    } else {
        const availableOnFids = fieldPropMetadata.availableOnFids;
        for (let index in availableOnFids) {
            const fid = availableOnFids[index];
            const field = schema.types.A.fields[fid];
            const fieldBase = field.base;
            if (!someObject[fieldBase]) {
                someObject[fieldBase] = [{name: fieldProp, type: getTypeOf(fieldProp, fid)}]
            } else {
                someObject[fieldBase].push({name: fieldProp, type: getTypeOf(fieldProp, fid)});
            }
        }
    }
}

// console.log(someObject)

let s = '';

for (let base in someObject) {
    if (base === 'common') {
        s += `interface IBaseField {${someObject[base].map(ob => `\t\n${ob.name} : ${ob.type}`).join(';')}\n}`
    } else {
        s += `\n\ninterface I${base} extends IBaseField {${someObject[base].map(ob => `\t\n${ob.name} : ${ob.type}`).join(';')}\n}`
    }
}

console.log(s);

function getTypeOf(fieldProp, availableFid) {
    const type = schema.types.A;
    const fields = type.fields;
    const field = fields[availableFid || 'A'];
    if (Array.isArray(field[fieldProp])) {
        let itemType = typeof field[fieldProp][0];
        return `${itemType}[]`;
    } else if (typeof field[fieldProp] === 'object') {
        return `{}`;
    } else {
        return typeof field[fieldProp];
    }
}