var mobilePhones = {
    iphone: {
        iphone13Pro: {
            name: "iPhone 13 Pro",
            brand: "Apple",
            image: "./imgs/iphone_13_pro.jpg",
        },


        iphone13: {
            name: "iPhone 13",
            brand: "Apple",
            image: "./imgs/iphone_13.jpg",
        },
        iphone12: {
            name: "iPhone 12",
            brand: "Apple",
            image: "./imgs/iphone_12.jpg",
        },
        iphoneSE: {
            name: "iPhone SE",
            brand: "Apple",
            image: "./imgs/iphone_se.jpg",
        }
    },
    samsung: {
        galaxyS22Ultra: {
            name: "Galaxy S22 Ultra",
            brand: "Samsung",
            image: "./imgs/samsung-galaxy-s22-ultra.jpg",
        },
        galaxyNote20Ultra: {
            name: "Galaxy Note20 Ultra",
            brand: "Samsung",
            image: "./imgs/samsung-galaxy-note20-ultra.jpg",
        },
        galaxyM51: {
            name: "Galaxy M51",
            brand: "Samsung",
            image: "./imgs/samsung-galaxy-m51.jpg",
        },
    }

}


function search(obj) {
    return [mobilePhones.iphone.iphone13Pro.name]
  }



  console.log(search(mobilePhones))



