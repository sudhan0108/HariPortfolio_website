let image = {
    fetchImage: function (city) {
        const access_key = "lgHMz6HybBNqJUYfy52_ye2jp44tJQWkF_KU-DZqeQI";
        const api = 'https://api.unsplash.com/search/photos?query=' + city + '&per_page=10&orientation=portrait&page=1&client_id=' + access_key;


        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { results } = data;
                const { urls: { raw } } = results[0];
                console.log(raw);
                
                document.querySelector(".Photo").setAttribute("src", raw);

            });
    }

}

document.querySelector(".darkmode").addEventListener("click", function () {
    

    document.querySelector(".light").classList.add("dark");
    document.querySelector(".dark").classList.remove("light");

})


if(screen.width<1300)
{
    document.querySelector(".photo-frame").style.display = "none";
}
else{
    let hari = "Tirunelveli";
    image.fetchImage(hari);
}
console.log(screen.width);

