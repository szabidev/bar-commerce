import { ImageList, ImageListItem } from '@mui/material';
import Container from '@mui/material/Container';

const AdminForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('submit');
  };

  const containerStyle = {
    margin: '0',
    padding: 0,
    width: 'auto',
  };

  const imageStyle = {
    width: '400px',
    height: '400px',
    objectFit: 'cover',
    margin: '20px auto',
    textAlign: 'center',
  };

  return (
    <Container sx={containerStyle}>
      <form className="admin__form" onSubmit={handleSubmit}>
        <div className="admin__form--content">
          <div className="admin__form--group">
            <div className="admin__form--control">
              <label htmlFor="class">Class</label>
              <input type="text" name="class" id="class" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="image">Image</label>
              <input type="text" name="image" id="image" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="isPromo">Promo</label>
              <input type="text" name="isPromo" id="isPromo" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="material">Material</label>
              <input type="text" name="material" id="material" />
            </div>
          </div>
          <div className="admin__form--group">
            <div className="admin__form--control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="price">Price</label>
              <input type="text" name="price" id="price" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="quantity">Qty</label>
              <input type="text" name="quantity" id="quantity" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="type">Type</label>
              <input type="text" name="type" id="type" />
            </div>
            <div className="admin__form--control">
              <label htmlFor="author">Author</label>
              <input type="text" name="author" id="author" />
            </div>
          </div>
        </div>
        <div className="admin__form--action">
          <button type="button">Cancel</button>
          <button type="submit" className="save">
            Add Product
          </button>
        </div>
        <div className="image__container">
          <ImageList cols={1} sx={imageStyle}>
            <ImageListItem>
              <img src="https://m.media-amazon.com/images/I/714qhXbZcdL.jpg" alt="shaker" />
              <p>Name</p>
            </ImageListItem>
          </ImageList>
        </div>
      </form>
    </Container>
  );
};

export default AdminForm;
