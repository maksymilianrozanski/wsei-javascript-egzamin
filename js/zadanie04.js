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
});

