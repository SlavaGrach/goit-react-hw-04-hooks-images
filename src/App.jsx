import "./App.css";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchBar from "./components/Searchbar/SearchBar";
import { Api } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Spinner } from "./components/Loader/Spinner";
import Modal from "./components/Modal/Modal";

export default function App() {
  const [imageName, setImageName] = useState(null); //имя изображения для поиска
  const [images, setImages] = useState([]); //массив найденных изображений
  const [page, setPage] = useState(1); //номер страницы из 12 изображений
  const [reqStatus, setReqStatus] = useState("idle"); // idle, pending, resolved, rejected - состояния запроса
  const [selectedImage, setSelectedImage] = useState(null); //имя выбраного изображения для модального окна

  useEffect(() => {
    if (!imageName) return; //если запрос пустой то и запращивать ничего не надо

    setReqStatus("pending");
    //магия асинхронных запросов в useEffect от Dan Abramov
    const fetchImages = async () => {
      try {
        const response = await Api.getImages(imageName, page);
        if (!response.length) {
          throw new Error();
        }
        setReqStatus("resolved");
        setImages((prevImages) => {
          return [...prevImages, ...response];
        });
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      } catch (error) {
        setReqStatus("rejected");
        toast.warning(`Not Found any images by query: ${imageName}`);
      }
    };

    fetchImages();
  }, [imageName, page]);

  //отдельный хук на событие нажатие ESC для закрытия модалки
  useEffect(() => {
    selectedImage && window.addEventListener("keydown", handlerPressKey);
  }, [selectedImage]);

  // сброс state перед новым запросом
  const resetState = () => {
    setImageName(null);
    setImages([]);
    setPage(1);
    setReqStatus("idle");
  };

  // получаем имя изображения из формы и записываем в state
  const hendleFormSubmit = (imageName) => {
    resetState(); //очистка состояния перед запросом
    setImageName(imageName);
  };

  // действие при выборе изображения в галерее, в стате передаем ссылку на большое изображение
  const handleSelectImage = (imageURL) => {
    setSelectedImage(imageURL);
  };

  const handleCloseModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    setSelectedImage(null);
  };

  const handlerPressKey = (e) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  // действие по нажалию кнопки "LOAD MORE" с стайте увеличиваем значение page на 1
  const handleLoadMoreClick = () => {
    setPage((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div className="App">
      <SearchBar onSubmit={hendleFormSubmit} />
      {reqStatus === "pending" && <Spinner />}
      <ImageGallery images={images} onSelect={handleSelectImage} />
      {selectedImage && (
        <Modal closeModal={handleCloseModal} src={selectedImage} />
      )}
      {images.length > 0 && <Button onClick={handleLoadMoreClick} />}
      <ToastContainer />
    </div>
  );
}

// class oldApp {
//   state = {
//     imageName: null,
//     images: [],
//     page: 1,
//     reqStatus: "idle", // idle, pending, resolved, rejected
//     selectedImage: null,
//   };

//   async componentDidUpdate(_, prevState) {
//     //асиннхронный вызов
//     const { imageName, page, selectedImage } = this.state;
//     if (prevState.imageName !== imageName || prevState.page !== page) {
//       try {
//         this.setState({ reqStatus: "pending" });
//         const images = await Api.getImages(imageName, page);
//         if (!images.length) {
//           throw new Error();
//         }
//         const reqStatus = "resolved";
//         this.setState((prevState) => ({
//           images: [...prevState.images, ...images],
//           reqStatus: reqStatus,
//         }));
//       } catch (error) {
//         this.setState({
//           status: "rejected",
//         });
//         toast.warning(`Not Found any images by query: ${imageName}`);
//       }
//       page > 1 && // если больше одной страницы, то скролим
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth",
//         });
//     }
//     selectedImage && window.addEventListener("keydown", this.handlerPressKey);
//   }

//   // получаем имя изображения из формы и записываем в state
//   hendleFormSubmit = (imageName) => {
//     this.resetState(); //очистка состояния перед запросом
//     this.setState({ imageName });
//   };

//   // действие при выборе изображения в галерее, в стате передаем ссылку на большое изображение
//   handleSelectImage = (imageURL) => {
//     this.setState({ selectedImage: imageURL });
//   };

//   handleCloseModal = (e) => {
//     if (e.target.nodeName === "IMG") {
//       return;
//     }
//     this.setState({ selectedImage: null });
//   };

//   handlerPressKey = (e) => {
//     if (e.key === "Escape") {
//       this.setState({ selectedImage: null });
//     }
//   };

//   // действие по нажалию кнопки "LOAD MORE" с стайте увеличиваем значение page на 1
//   handleLoadMoreClick = () => {
//     this.setState({ page: this.state.page + 1 });
//   };

//   // сброс state перед новым запросом
//   resetState = () => {
//     this.setState({
//       imageName: null,
//       images: [],
//       page: 1,
//       reqStatus: "idle",
//       modalIsOpen: false,
//     });
//   };

//   render() {
//     const { reqStatus, images, selectedImage } = this.state;

//     return (
//       <div className="App">
//         <SearchBar onSubmit={this.hendleFormSubmit} />
//         {reqStatus === "pending" && <Spinner />}
//         <ImageGallery
//           images={images}
//           // onClick={this.handleSelectImage}
//           onSelect={this.handleSelectImage}
//         />
//         {selectedImage && (
//           <Modal closeModal={this.handleCloseModal} src={selectedImage} />
//         )}
//         {images.length > 0 && <Button onClick={this.handleLoadMoreClick} />}
//         <ToastContainer />
//       </div>
//     );
//   }
// }
