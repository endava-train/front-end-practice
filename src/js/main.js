function main() {
    const element = document.getElementById('see-review-details');

    if (element !== null) {
        element.addEventListener('click', function () {
            alert("There're not reviews");
        }, false);
    }
}

function result() {
    const form = document.getElementById('form-review');
    if (form !== null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const criteria = document.getElementById("form-control-index");
            if (criteria !== null) {
                window.location = "results.html?criteria=" + criteria.value;
            }
        }, false);
    }
}

function putResult() {
    const element = document.getElementById('change-value-result');
    if (element !== null) {
        console.log()
        const urlQuery = window.location.search.split('=');
        if (urlQuery.length > 0) {
            element.value = urlQuery[urlQuery.length - 1];
            const form = document.getElementById('form-review');
            if (form !== null) {
                form.value = '';
            }
        }
    }
}

main();
result();
putResult();