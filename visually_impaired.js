var processedTags = ['div', 'p', 'span', 'a', 'h1', 'h2', 'h3', 'li', 'td'];
var excludeIdPrefix = 'vi';

function addVisuallyImpairedPanel() {
    var parentElem = document.body;
    var wrapper = document.createElement('div');
    var panel = document.createElement('div');
    var fontContainer = document.createElement('dl');
    var fontDefinition = document.createElement('dt');
    var fontTahoma = document.createElement('dd');
    var fontTimes = document.createElement('dd');
    var fontSizeContainer = document.createElement('dl');
    var fontSizeDefinition = document.createElement('dt');
    var fontSizeSmall = document.createElement('dd');
    var fontSizeMedium = document.createElement('dd');
    var fontSizeBig = document.createElement('dd');
    var pageColorContainer = document.createElement('dl');
    var pageColorDefinition = document.createElement('dt');
    var pageColorBW = document.createElement('dd');
    var pageColorWB = document.createElement('dd');
    var pageColorBB = document.createElement('dd');
    var pageColorBrBi = document.createElement('dd');
    var pageColorGB = document.createElement('dd');
    var letterSpacingContainer = document.createElement('dl');
    var letterSpacingDefinition = document.createElement('dt');
    var letterSpacingStandart = document.createElement('dd');
    var letterSpacingMedium = document.createElement('dd');
    var letterSpacingBig = document.createElement('dd');
    var simpleModeContainer = document.createElement('dl');
    var simpleModeDefinition = document.createElement('dt');
    var menuDefinitionStyle = 'float: left; margin-left:15px;';
    var menuValueStyle = 'float: left; font-weight:normal; margin-left:5px; padding: 0px 2px; border: 1px solid black;';
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    wrapper.id = 'viPanelWrapper';
    wrapper.style.position = 'fixed';
    wrapper.style.left = '0px';
    wrapper.style.top = '0px';
    wrapper.style.zIndex = '9999';
    wrapper.style.width = '100%';
    wrapper.style.height = '50px';

    panel.id = 'viPanel';
    panel.style.zIndex = '9999';
    panel.style.width = '100%';
    panel.style.height = '50px';
    panel.style.margin = '0px auto';
    panel.style.fontSize = '16px';
    panel.style.fontWeight = 'bold';
    //some magic for IE 7
    if (isIE) {
        //gradient
        wrapper.style.filter = 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#ffffff, endColorstr=#9d9d9d)';
        //vertical-align
        panel.style.marginTop = '14px';
    } else {
        wrapper.style.background = 'linear-gradient(0deg, rgba(157,157,157,1) 0%, rgba(255,255,255,1) 53%)';
        panel.style.display =  'table-cell';
        panel.style.verticalAlign = 'middle';
    }
    //font
    fontContainer.id = 'viFontContainer';
    fontContainer.style.display = 'inline';
    fontDefinition.id = 'viFontDefinition';
    fontDefinition.style.float = 'left';
    fontDefinition.style.marginLeft = '15px';
    fontDefinition.appendChild(document.createTextNode('Шрифт:'));
    fontTahoma.id = 'viFontTahoma';
    fontTahoma.style.float = 'left';
    fontTahoma.style.fontWeight = 'normal';
    fontTahoma.style.marginLeft = '5px';
    fontTahoma.style.padding = '0px 2px';
    fontTahoma.style.border = '1px solid black';
    fontTahoma.onclick = function () { changeFont('tahoma') };
    fontTahoma.appendChild(document.createTextNode('Tahoma'));
    fontTimes.id = 'viFontTimes';
    fontTimes.style.float = 'left';
    fontTimes.style.fontWeight = 'normal';
    fontTimes.style.marginLeft = '5px';
    fontTimes.style.padding = '0px 2px';
    fontTimes.style.border = '1px solid black';
    fontTimes.onclick =  function () { changeFont('times') };
    fontTimes.appendChild(document.createTextNode('Times New Roman'));
    //font size
    fontSizeContainer.id = 'viFontSizeContainer';
    fontSizeContainer.style.display = 'inline';
    fontSizeDefinition.id = 'viFontSizeDefinition';
    fontSizeDefinition.style.float = 'left';
    fontSizeDefinition.style.marginLeft = '15px';
    fontSizeDefinition.appendChild(document.createTextNode('Размер шрифта:'));
    fontSizeSmall.id = 'viFontSizeSmall';
    fontSizeSmall.style.float = 'left';
    fontSizeSmall.style.fontWeight = 'normal';
    fontSizeSmall.style.marginLeft = '5px';
    fontSizeSmall.style.padding = '0px 2px';
    fontSizeSmall.style.border = '1px solid black';
    fontSizeSmall.onclick = function () { changeFontSize('small'); }
    fontSizeSmall.appendChild(document.createTextNode('+'));
    fontSizeMedium.id = 'viFontSizeMedium';
    fontSizeMedium.style.float = 'left';
    fontSizeMedium.style.fontWeight = 'normal';
    fontSizeMedium.style.marginLeft = '5px';
    fontSizeMedium.style.padding = '0px 2px';
    fontSizeMedium.style.border = '1px solid black';
    fontSizeMedium.onclick =  function () { changeFontSize('medium'); }
    fontSizeMedium.appendChild(document.createTextNode('++'));
    fontSizeBig.id = 'viFontSizeBig';
    fontSizeBig.style.float = 'left';
    fontSizeBig.style.fontWeight = 'normal';
    fontSizeBig.style.marginLeft = '5px';
    fontSizeBig.style.padding = '0px 2px';
    fontSizeBig.style.border = '1px solid black';
    fontSizeBig.onclick = function () { changeFontSize('big'); }
    fontSizeBig.appendChild(document.createTextNode('+++'));
    //font color
    pageColorContainer.id = 'viPageColorContainer';
    pageColorContainer.style.display = 'inline';
    pageColorDefinition.id = 'viPageColorDefinition';
    pageColorDefinition.style.float = 'left';
    pageColorDefinition.style.marginLeft = '15px';
    pageColorDefinition.appendChild(document.createTextNode('Цвета сайта:'));
    pageColorBW.id = 'viPageColorBW';
    pageColorBW.style.float = 'left';
    pageColorBW.style.fontWeight = 'normal';
    pageColorBW.style.marginLeft = '5px';
    pageColorBW.style.padding = '0px 2px';
    pageColorBW.style.border = '1px solid black';
    pageColorBW.style.color = 'black';
    pageColorBW.style.backgroundColor = 'white';
    pageColorBW.onclick = function () { changePageColor('black-white'); }
    pageColorBW.appendChild(document.createTextNode('Абв'));
    pageColorWB.id = 'viPageColorWB';
    pageColorWB.style.float = 'left';
    pageColorWB.style.fontWeight = 'normal';
    pageColorWB.style.marginLeft = '5px';
    pageColorWB.style.padding = '0px 2px';
    pageColorWB.style.border = '1px solid black';
    pageColorWB.style.color = 'white';
    pageColorWB.style.backgroundColor = 'black';
    pageColorWB.onclick = function () { changePageColor('white-black'); }
    pageColorWB.appendChild(document.createTextNode('Абв'));
    pageColorBB.id = 'viPageColorBB';
    pageColorBB.style.float = 'left';
    pageColorBB.style.fontWeight = 'normal';
    pageColorBB.style.marginLeft = '5px';
    pageColorBB.style.padding = '0px 2px';
    pageColorBB.style.border = '1px solid black';
    pageColorBB.style.color = 'midnightblue';
    pageColorBB.style.backgroundColor = 'lightblue';
    pageColorBB.onclick = function () { changePageColor('blue-blue'); }
    pageColorBB.appendChild(document.createTextNode('Абв'));
    pageColorBrBi.id = 'viPageColorBrBi';
    pageColorBrBi.style.float = 'left';
    pageColorBrBi.style.fontWeight = 'normal';
    pageColorBrBi.style.marginLeft = '5px';
    pageColorBrBi.style.padding = '0px 2px';
    pageColorBrBi.style.border = '1px solid black';
    pageColorBrBi.style.color = 'saddlebrown';
    pageColorBrBi.style.backgroundColor = 'cornsilk';
    pageColorBrBi.onclick = function () { changePageColor('brown-biege'); }
    pageColorBrBi.appendChild(document.createTextNode('Абв'));
    pageColorGB.id = 'viPageColorGB';
    pageColorGB.style.float = 'left';
    pageColorGB.style.fontWeight = 'normal';
    pageColorGB.style.marginLeft = '5px';
    pageColorGB.style.padding = '0px 2px';
    pageColorGB.style.border = '1px solid black';
    pageColorGB.style.color = 'yellowgreen';
    pageColorGB.style.backgroundColor = 'saddlebrown';
    pageColorGB.onclick = function () { changePageColor('green-brown'); }
    pageColorGB.appendChild(document.createTextNode('Абв'));
    //letter-spacing
    letterSpacingContainer.id = 'viLetterSpacingContainer';
    letterSpacingContainer.style.display = 'inline';
    letterSpacingDefinition.id = 'viLetterSpacingDefinition';
    letterSpacingDefinition.style.float = 'left';
    letterSpacingDefinition.style.marginLeft = '15px';
    letterSpacingDefinition.appendChild(document.createTextNode('Межбуквенный интервал:'));
    letterSpacingStandart.id = 'viLetterSpacingStandart';
    letterSpacingStandart.style.float = 'left';
    letterSpacingStandart.style.fontWeight = 'normal';
    letterSpacingStandart.style.marginLeft = '5px';
    letterSpacingStandart.style.padding = '0px 2px';
    letterSpacingStandart.style.border = '1px solid black';
    letterSpacingStandart.onclick = function () { changeLetterSpacing('standart'); }
    letterSpacingStandart.appendChild(document.createTextNode('+'));
    letterSpacingMedium.id = 'viLetterSpacingMedium';
    letterSpacingMedium.style.float = 'left';
    letterSpacingMedium.style.fontWeight = 'normal';
    letterSpacingMedium.style.marginLeft = '5px';
    letterSpacingMedium.style.padding = '0px 2px';
    letterSpacingMedium.style.border = '1px solid black';
    letterSpacingMedium.onclick = function () { changeLetterSpacing('medium'); }
    letterSpacingMedium.appendChild(document.createTextNode('++'));
    letterSpacingBig.id = 'viLetterSpacingBig';
    letterSpacingBig.style.float = 'left';
    letterSpacingBig.style.fontWeight = 'normal';
    letterSpacingBig.style.marginLeft = '5px';
    letterSpacingBig.style.padding = '0px 2px';
    letterSpacingBig.style.border = '1px solid black';
    letterSpacingBig.onclick = function () { changeLetterSpacing('big'); }
    letterSpacingBig.appendChild(document.createTextNode('+++'));
    //simple mode
    simpleModeContainer.id = 'viSimpleModeContainer';
    simpleModeContainer.style.display = 'inline';
    simpleModeDefinition.id = 'viSimpleModeDefinition';
    simpleModeDefinition.style.float = 'left';
    simpleModeDefinition.style.marginLeft = '15px';
    simpleModeDefinition.onclick = function () { activateSimpleMode(); }
    simpleModeDefinition.appendChild(document.createTextNode('Закрыть'));

    fontContainer.appendChild(fontDefinition);
    fontContainer.appendChild(fontTahoma);
    fontContainer.appendChild(fontTimes);

    fontSizeContainer.appendChild(fontSizeDefinition);
    fontSizeContainer.appendChild(fontSizeSmall);
    fontSizeContainer.appendChild(fontSizeMedium);
    fontSizeContainer.appendChild(fontSizeBig);

    pageColorContainer.appendChild(pageColorDefinition);
    pageColorContainer.appendChild(pageColorBW);
    pageColorContainer.appendChild(pageColorWB);
    pageColorContainer.appendChild(pageColorBB);
    pageColorContainer.appendChild(pageColorBrBi);
    pageColorContainer.appendChild(pageColorGB);

    letterSpacingContainer.appendChild(letterSpacingDefinition);
    letterSpacingContainer.appendChild(letterSpacingStandart);
    letterSpacingContainer.appendChild(letterSpacingMedium);
    letterSpacingContainer.appendChild(letterSpacingBig);

    simpleModeContainer.appendChild(simpleModeDefinition);

    panel.appendChild(fontContainer);
    panel.appendChild(fontSizeContainer);
    panel.appendChild(pageColorContainer);
    panel.appendChild(letterSpacingContainer);
    panel.appendChild(simpleModeContainer);

    wrapper.appendChild(panel);
    parentElem.insertBefore(wrapper, parentElem.firstChild);
}

function addVisuallyImpairedButton() {
    var image = document.createElement('img');
    var parentElem = document.body;
    image.id = 'viButton';
    image.onclick = function () { changeDisplayMode(); }
    image.src = 'http://kroftoptica.ru/sites/all/themes/optica/images/vimode.png';
    image.style.position = 'fixed';
    image.style.zIndex = '9999';
    image.style.top = '45px';
    image.style.right = '50px';
    image.style.width =  '100px';
    parentElem.insertBefore(image, parentElem.firstChild);
}

function activateSimpleMode() {
    document.cookie = 'vi_mode=0';
    document.location.reload();
}
//hide some elements, set up some margins and paddings
function preparePage() {
    $('.big_img').css('display', 'none');
    $('.map').css('display', 'none');
    $('.menu').css('marginTop', '50px');
    $('.menu').css('marginBottom', '60px');
    $('.fon_big').css('paddingTop', '50px');
    $('.shadow').css('background', 'none');
    $('.fon_content').css('background', 'none');
    $('.fon_content2').css('background', 'none');
    $('.footer').css('background', 'none');
    $('.header_blok h3').css('background', 'none');
    $('#block-block-3 h3').html('Ст. Оскол');
    $('.left h3').css('background', 'none');
    $('.menu .active a').css('background', 'none');
}

function activateVisuallyImpairedMode() {
    document.cookie = 'vi_mode=1';
    $('#viButton').remove();
    preparePage();
    addVisuallyImpairedPanel();
}

function changeDisplayMode() {
    try {
        document.cookie = 'vi_test=hello';
        if (getCookie('vi_test') != 'hello') {
            throw "сайт не может получить доступ к cookie";
        }
        if (getCookie('vi_mode') == 1) {
            activateSimpleMode();
        } else {
            activateVisuallyImpairedMode();
            activateSettings();
        }
    } catch (e) {
        alert('Для корректной работы версии требуется включить cookie! Описание ошибки: ' + e);
    }
}

function activateSettings() {
    var vi_font = getCookie('vi_font');
    var vi_fontSize = getCookie('vi_fontSize');
    var vi_pageColor = getCookie('vi_pageColor');
    var vi_letterSpacing = getCookie('vi_letterSpacing');

    if (vi_font != undefined) {
        changeFont(vi_font);
    }

    if (vi_fontSize != undefined) {
        changeFontSize(vi_fontSize);
    }

    if (vi_pageColor != undefined) {
        changePageColor(vi_pageColor);
    }

    if (vi_letterSpacing != undefined) {
        changeLetterSpacing(vi_letterSpacing);
    }
}

function initDisplayMode() {
    addVisuallyImpairedButton();
    if (getCookie('vi_mode') == 1) {
        activateVisuallyImpairedMode();
        activateSettings();
    }
}

function changeFont(font) {
    var appendStyle;

    switch (font) {
        case 'tahoma':
            appendStyle = 'Tahoma, sans-serif';
            break;
        case 'times':
            appendStyle = 'Times New Roman, serif';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements.item(j).id.slice(0, 2) == excludeIdPrefix) {
                continue;
            }
            elements.item(j).style.fontFamily = appendStyle;
        }
    }

    document.cookie = 'vi_font=' + font;
}

function changeFontSize(fontSize) {
    var appendStyle;

    switch (fontSize) {
        case 'small':
            appendStyle = '16px';
            break;
        case 'medium':
            appendStyle = '20px';
            break;
        case 'big':
            appendStyle = '23px';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements.item(j).id.slice(0, 2) == excludeIdPrefix) {
                continue;
            }
            elements.item(j).style.fontSize = appendStyle;
        }
    }

    document.cookie = 'vi_fontSize=' + fontSize;
}

function changePageColor(pageColor) {
    var appendColorStyle;
    var appendBackgroungColorStyle;

    switch (pageColor) {
        case 'black-white':
            appendColorStyle = 'black';
            appendBackgroungColorStyle = 'white';
            break;
        case 'white-black':
            appendColorStyle = 'white';
            appendBackgroungColorStyle = 'black';
            break;
        case 'blue-blue':
            appendColorStyle = 'midnightblue';
            appendBackgroungColorStyle = 'lightblue';
            break;
        case 'brown-biege':
            appendColorStyle = 'saddlebrown';
            appendBackgroungColorStyle = 'cornsilk';
            break;
        case 'green-brown':
            appendColorStyle = 'yellowgreen';
            appendBackgroungColorStyle = 'saddlebrown';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements.item(j).id.slice(0, 2) == excludeIdPrefix) {
                continue;
            }
            elements.item(j).style.color = appendColorStyle;
            elements.item(j).style.backgroundColor = appendBackgroungColorStyle;
        }
    }

    document.cookie = 'vi_pageColor=' + pageColor;
}

function changeLetterSpacing(letterSpacing) {
    var appendStyle;

    switch (letterSpacing) {
        case 'standart':
            appendStyle = 'normal';
            break;
        case 'medium':
            appendStyle = '3px';
            break;
        case 'big':
            appendStyle = '6px';
            break;
    }

    for (var i = 0; i < processedTags.length; i++) {
        var elements = document.getElementsByTagName(processedTags[i]);
        for (var j = 0; j < elements.length; j++) {
            if (elements.item(j).id.slice(0, 2) == excludeIdPrefix) {
                continue;
            }
            elements.item(j).style.letterSpacing = appendStyle;
        }
    }

    document.cookie = 'vi_letterSpacing=' + letterSpacing;
}

function getCookie(key) {
    var cookies = document.cookie.split('; ');

    for(var i=0; i<cookies.length; i++) {
        var key_value = cookies[i].split('=');
        if (key_value[0] == key) {
            return key_value[1];
        }
    }
}

$(document).ready(function(){ initDisplayMode() });