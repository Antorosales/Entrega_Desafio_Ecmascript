class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {

      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error(`El código "${code}" ya está en uso.`);
        return;
      }
  
      const newProduct = {
        id: this.nextId++, 
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
      console.log(`Producto agregado: ${title}`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.error("Not Encontrado");
        return null;
      }
      return product;
    }
  }
  

  const manager = new ProductManager();
  
  manager.addProduct({
    title: "Producto 1",
    description: "Agua",
    price: 1000,
    thumbnail: "ruta",
    code: "01",
    stock: 100,
  });
  
  manager.addProduct({
    title: "Producto 2",
    description: "Bebida",
    price: 400,
    thumbnail: "ruta",
    code: "02",
    stock: 200,
  });
  
  console.log(manager.getProducts());
  console.log(manager.getProductById(2));
  console.log(manager.getProductById(99)); 