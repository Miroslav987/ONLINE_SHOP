import React, { useContext, useEffect, useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, styled } from "@mui/material";
import "../admin.css";
import { productContext } from "../../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";


const InputFile = styled('div')({
  height:"55px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  border: "1px solid #c4c4c4",
  width:"100%",
  borderRadius:"5px",
});

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);


  }, [id]);


    function handleImg (img,name) {
      const e = {
         target:{
         value:img,
          name:name,
        }
      }
         handleChange(e)
    }

  const convertImg1 =(e)=> {
    const name =e.target.name;
    const file = e.target.files[0]; 
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend =()=> handleImg(reader.result ,name)

   
}


  const convertImg2 =(e)=> {
    const name =e.target.name;
    const file = e.target.files[0]; 
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend =()=> handleImg(reader.result ,name)
}

  const convertImg3 =(e)=> {
    const name =e.target.name;
    const file = e.target.files[0]; 
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend =()=> handleImg(reader.result ,name)
}

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]:e.target.value,
      // img1: img1,
      // img2: img2,
      // img3: img3,
    };
    console.log("handleChange",{[e.target.name]:e.target.value});
    setInpValues(obj);

  }


  const navigate = useNavigate();

  function handleSave(e) {
   
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.model.trim() ||
      !inpValues.description.trim() ||
      !inpValues.color.trim() ||
      !inpValues.price 
      // ||
      // !inpValues.img1.trim() ||
      // !inpValues.img2.trim() ||
      // !inpValues.img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/list");
  }

  return (
    <>
      <h2 id="admin-title">Редактирование товара</h2>
      <form
        id="form-add"
        onSubmit={e => handleSave(e)}>

        <Box className="addBox">

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            name="category"
            value={inpValues.category}
            onChange={e =>handleChange(e)}>
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="elecrtonic">Elecrtonic</MenuItem>
            <MenuItem value="car">Car</MenuItem>
          </Select>
          </FormControl>

          <TextField
            name="title"
            className="outlined-basic"
            label="Название"
            variant="outlined"
            value={inpValues.title}
            onChange={e =>handleChange(e)}
          />
        </Box>

        <Box className="addBox">
          <TextField
            name="model"
            className="outlined-basic"
            label="Модель"
            variant="outlined"
            value={inpValues.model}
            onChange={e =>handleChange(e)}
          />
          <TextField
            name="color"
            className="outlined-basic"
            label="Цвет"
            variant="outlined"
            type="color"
            value={inpValues.color}
            onChange={e =>handleChange(e)}
          />
        </Box>
        
        <Box className="addBox">
          <TextField
            name="price"
            type="number"
            className="outlined-basic"
            label="Цена"
            variant="outlined"
            value={inpValues.price}
            onChange={e =>handleChange(e)}
          />

      <InputFile >
        <input name="img1"
          type="file"
          accept="image/png, image/jpeg"
          onChange={convertImg1} />
      </InputFile>
        </Box>
        
        <Box className="addBox">
        <InputFile >
        <input name="img2"
          type="file"
          accept="image/png, image/jpeg"
          onChange={convertImg2} />
         </InputFile>
         <InputFile >
        <input name="img3"
          type="file"
          accept="image/png, image/jpeg"
          onChange={convertImg3} />
        </InputFile>
        </Box>

        <TextField
          name="description"
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          multiline
          value={inpValues.description}
            onChange={e =>handleChange(e)}
        />
        <Button
          variant="contained"
          type="submit">
          Добавить
        </Button>
      </form>
    </>
  );
};

export default EditProduct;
