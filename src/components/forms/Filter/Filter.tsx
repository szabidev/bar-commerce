import { useState } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ShopItem } from '../../../types/products';

const Filter = () => {
  const store = useAppSelector((state) => state.productsDetail);
  const { allProducts } = store.products;
  const { productsByType } = store.products;
  const { productsByClass } = store.products;
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState<string | undefined>('');
  const [selectedProducts, setSelectedProducts] = useState<ShopItem[]>([]);

  const separateCamelCase = (string: string) => {
    const separate = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    return separate.toLowerCase();
  };

  const handleSelect = (itemKey: string) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [itemKey]: !prevSelected[itemKey],
    }));

    const filteredItems = allProducts.filter((product: ShopItem) =>
      console.log(product[itemKey as keyof ShopItem]),
    );
    setSelectedProducts(filteredItems);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const findMatchingProducts = (searchTerm: string) => {
    return allProducts.reduce((acc: ShopItem[], product: ShopItem) => {
      const { name, description, type, material, author } = product;
      const productClass = product.class;
      const nameMatch = name.toLowerCase().includes(searchTerm);
      const descMatch = description.toLowerCase().includes(searchTerm);
      const typeMatch = type.toLowerCase().includes(searchTerm);
      const materialMatch = material.toLowerCase().includes(searchTerm);
      const authorMatch = author.toLowerCase().includes(searchTerm);
      const classMatch = productClass.toLowerCase().includes(searchTerm);

      if (nameMatch || descMatch || typeMatch || materialMatch || authorMatch || classMatch) {
        acc.push(product);
      }
      return acc;
    }, []);
  };

  const filteredProducts = searchTerm && findMatchingProducts(searchTerm);
  console.log(selectedProducts);
  console.log(filteredProducts);

  const byType = Object.keys(productsByType).map((type) => (
    <p
      onClick={() => handleSelect(type)}
      key={type}
      className={`types ${selected[type] ? 'selected' : ''}`}
    >
      {type}
    </p>
  ));

  const byClass = Object.keys(productsByClass).map((byClass) => (
    <p
      onClick={() => handleSelect(byClass)}
      key={byClass}
      className={`classes ${selected[byClass] ? 'selected' : ''}`}
    >
      {separateCamelCase(byClass)}
    </p>
  ));

  return (
    <div className="filter__container">
      <div className="filter">
        <div className="filter__by--type">{byType}</div>
        <div className="filter__by--class">{byClass}</div>
        <div className="filter__by--name">
          <form className="filter__form">
            <div className="filter__form--group">
              <label htmlFor="nameFilter">By name</label>
              <input
                type="text"
                id="nameFilter"
                name="nameFilter"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
        <div className="filter__action">
          <button type="submit">Apply</button>
          <button type="button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
