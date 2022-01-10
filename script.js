document.addEventListener('DOMContentLoaded', function(event) {
    const typeWriteEl = document.getElementById("typewrite");

    (function(name) {

        function addSubstring(index) {
            typeWriteEl.innerHTML = "I am " + name.substring(0, index+1) + "|";
        }

        ([...name]).forEach((el, index) => {
            setTimeout(addSubstring, 200*index, index);
        })

        setInterval(function() {
            if (typeWriteEl.innerHTML.length >= 24) {
                const lastChar = typeWriteEl.innerHTML.charAt(23);
                if (lastChar === '|') typeWriteEl.innerHTML = typeWriteEl.innerHTML.substring(0, 23) + '&nbsp;';
                else typeWriteEl.innerHTML = typeWriteEl.innerHTML.substring(0, 23) + '|';
            }
        }, 400)
        
    })("Chiranjeevi Kodati");
});