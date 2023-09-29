let Libro  ={
    isbm:"123",
    title:"hola",
    author:"tomas",
    rubro:"julio",
    price:"1234",

    GetISBM() {
        return this.isbm 
    },

    GetTitle() {
        return this.title
    },
    SetTile(title) {
        this.title = title
    },
    GetAuthor() {
        return this.author
    },
    SetAuthor(author) {
        this.author = author
    },
    GetRubro() {
        return this.rubro = rubro
    },
    SetRubro(rubro) {
        this.rubro = rubro
    },
    GetPrice() {
        return this.price = price
    },
    SetPrice(price) {
        this.price = price 
    }
}
let enviar = () => {
    let isbm = document.getElementsBydId("ISBM").value;
    let title = document.getElementById("Title").value;
    let author = document.getElementById("Author").value;
    let rubro = document.getElementById("Rubro").value;
    let price = document.getElementById("Price").value;


    Libro.SetISBM(isbm);
    Libro.Settitle(title);
    Libro.SetAuthor(author);
    Libro.SetRubro(rubro);
    Libro.SetPrice(price);
    alert("el libro es"+Libro.getisbm()+""+Libro.Gettitle()+"su creador es"+Libro.GetAuthor()+"su rubro es"+Libro.GetRubro()+"Su precio es"+Libro.GetPrice());    

}

let getLibro = (isbm, title , author, rubro, price) => {
    
}
