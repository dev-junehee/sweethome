import { useState, useEffect } from "react";
import { getAllProducts } from "~/api/products";
import ProductItem from "~/components/Shop/ProductItem";
import styles from "~/styles/Shop/Shop.module.scss";
import { ShopAllProduct, GetProduct } from "~/types";

const Shop = () => {
  const [allProducts, setAllProducts] = useState<ShopAllProduct>([]);
  const [originalProducts, setOriginalProducts] = useState<ShopAllProduct>([]);
  const [click] = useState(false);

  useEffect(() => {
    spreadAllProducts();
  }, []);

  useEffect(() => {}, [allProducts]);

  const spreadAllProducts = async () => {
    try {
      const res = await getAllProducts();
      setAllProducts(res);
      setOriginalProducts(res);
    } catch (error: any) {
      alert(error.message);
    }
  };

  // 상품 카테고리
  const categorys = ["ALL", "FURNITURE", "KITCHEN", "BEDROOM"];

  // 상품 카테고리별 필터 기능
  const categoryHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    if ((e.target as HTMLButtonElement).value === "ALL") {
      setAllProducts(originalProducts);
    } else if ((e.target as HTMLButtonElement).value === "FURNITURE") {
      setAllProducts(
        originalProducts.filter(product => product.tags === "FURNITURE")
      );
    } else if ((e.target as HTMLButtonElement).value === "KITCHEN") {
      setAllProducts(
        originalProducts.filter(product => product.tags === "KITCHEN")
      );
    } else if ((e.target as HTMLButtonElement).value === "BEDROOM") {
      setAllProducts(
        originalProducts.filter(product => product.tags === "BEDROOM")
      );
    }
  };

  return (
    <>
      <section className={styles.shop}>
        <div className={styles.menuWrap}>
          <ul className={styles.menu}>
            <li>
              {categorys.map((category, index) => (
                <input
                  key={index}
                  type="button"
                  defaultValue={category}
                  onClick={categoryHandler}
                  className={click ? styles.active : ""}
                />
              ))}
            </li>
          </ul>
        </div>
        <div className={styles.productListWrap}>
          <ul className={styles.productList}>
            {allProducts.map((product: GetProduct) => (
              <ProductItem product={product} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Shop;
