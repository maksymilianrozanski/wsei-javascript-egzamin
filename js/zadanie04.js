window.addEventListener("DOMContentLoaded", () => {

    //Zad 4_1
    let simpleClassElements = document.getElementsByClassName("sample_class");

    function getTagsOfElements(elements) {
        return Array.from(elements).reduce((tags, current) => {
                if (current.tagName !== undefined) tags.push(current.tagName);
                return tags
            }
            , [])
    }

    getTagsOfElements(simpleClassElements);

    //Zad 4_2
    let sampleIdElement = document.getElementById("sample_id");

    function getClassesOfElement(element) {
        return Array.from(element.classList).reduce((classes, current) => {
            classes.push(current);
            return classes
        }, [])
    }

    getClassesOfElement(sampleIdElement);

    //Zad 4_3
    let listItems = document.getElementsByClassName("sample_class_2")[0]
        .getElementsByTagName("LI");

    function getInnerTextsOfElements(elements) {
        return Array.from(elements).reduce((texts, current) => {
            texts.push(current.innerText);
            return texts
        }, [])
    }

    getInnerTextsOfElements(listItems);

    //Zad 4_4
    let hrefs = document.getElementsByTagName("a");

    function getAddressesOfElements(elements) {
        return Array.from(elements).reduce((addresses, current) => {
            addresses.push(current.getAttribute("href"));
            return addresses
        }, [])
    }

    getAddressesOfElements(hrefs);

    //Zad 4_5
    let sampleClass3Children = document.getElementsByClassName("sample_class_3")[0].childNodes;
    getTagsOfElements(sampleClass3Children);
});

