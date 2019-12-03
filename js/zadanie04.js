window.addEventListener("DOMContentLoaded", () => {

    //Zad 4_1
    let simpleClassElements = document.getElementsByClassName("sample_class");

    function getTagsOfElements(elements) {
        return Array.from(elements).reduce((tags, current) => {
                tags.push(current.tagName);
                return tags
            }
            , [])
    }

    //Zad 4_2
    let sampleIdElement = document.getElementById("sample_id");

    function getClassesOfElement(element) {
        return Array.from(element.classList).reduce((classes, current) => {
            classes.push(current);
            return classes
        }, [])
    }


    //Zad 4_3
    let listItems = document.getElementsByClassName("sample_class_2")[0]
        .getElementsByTagName("LI");

    function getInnerTextsOfElements(elements) {
        return Array.from(elements).reduce((texts, current) => {
            texts.push(current.innerText);
            return texts
        }, [])
    }

    //Zad 4_4
    let hrefs = document.getElementsByTagName("a");

    function getAddressesOfElements(elements) {
        return Array.from(elements).reduce((addresses, current) => {
            addresses.push(current.getAttribute("href"));
            return addresses
        }, [])
    }
});

