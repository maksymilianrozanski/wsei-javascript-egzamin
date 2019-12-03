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
});

