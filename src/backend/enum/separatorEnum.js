const SeparatorType = {
    NEW_LINE: 0,
    COMMA: 1,
    EMPTY: 2,
}

function getSeparator(value, listObj){
    switch(value) {
        case SeparatorType.NEW_LINE: return listObj.split("\n");
        case SeparatorType.COMMA: return listObj.split(",");
        case SeparatorType.EMPTY: return listObj.split(" ");
        default: return listObj;
    }
}

module.exports = getSeparator;