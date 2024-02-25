import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../../../context/AuthContextProvider";
import { productContext } from "../../../context/ProductContextProvider";
import "../admin.css";
import { grey } from "@mui/material/colors";

const InputFile = styled('div')({
    height:"55px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border: "1px solid #c4c4c4",
    width:"100%",
    borderRadius:"5px",
});

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const { user } = React.useContext(authContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState();
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img1Test, setImg1Test] = useState("");
  const [img2Test, setImg2Test] = useState("");
  const [img3Test, setImg3Test] = useState("");

  const convertImg1 =(e)=> {
    const file = e.target.files[0];
    setImg1Test(file.name)
    const reader = new FileReader();
    reader.onloadend =()=> setImg1(reader.result)
    reader.readAsDataURL(file)
}
  const convertImg2 =(e)=> {
    const file = e.target.files[0];
    setImg2Test(file.name)
    const reader = new FileReader();
    reader.onloadend =()=> setImg2(reader.result)
    reader.readAsDataURL(file)
}
  const convertImg3 =(e)=> {
    const file = e.target.files[0];
    setImg3Test(file.name)
    const reader = new FileReader();
    reader.onloadend =()=> setImg3(reader.result)
    reader.readAsDataURL(file)
}

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !category.trim() ||
      !title.trim() ||
      !model.trim() ||
      !color.trim() ||
      !price.trim() ||
      !img1Test.trim()||
      !img2Test.trim()||
      !img3Test.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      user: user.email,
      category,
      title,
      model,
      description,
      color,
      price: +price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setModel("");
    setDescription("");
    setColor("");
    setPrice(0);
    setImg1("");
    setImg2("");
    setImg3("");
  }

  return (
    <>

      <h2 id="admin-title" style={{fontFamily:"sans-serif"}}>Добавление товара</h2>   
      <form
        id="form-add"
        onSubmit={e => handleAdd(e)}>

        <Box className="addBox">

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}>
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="elecrtonic">Elecrtonic</MenuItem>
            <MenuItem value="car">Car</MenuItem>
          </Select>
          </FormControl>

          <TextField
            className="outlined-basic"
            label="Название"
            variant="outlined"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Box>

        <Box className="addBox">
          <TextField
            className="outlined-basic"
            label="Модель"
            variant="outlined"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
          <TextField
            className="outlined-basic"
            label="Цвет"
            variant="outlined"
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </Box>
        
        <Box className="addBox">
          <TextField
            type="number"
            className="outlined-basic"
            label="Цена"
            variant="outlined"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

      <InputFile >
      <input type="file" accept="image/jpeg" onChange={convertImg1} />
      </InputFile>

        </Box>
        
        <Box className="addBox">

        <InputFile >
      <input type="file" accept="image/jpeg" onChange={convertImg2} />
      </InputFile>

      <InputFile >
      <input type="file" accept="image/jpeg" onChange={convertImg3} />
      </InputFile>
        </Box>

        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          multiline
          value={description}
          
          onChange={e => setDescription(e.target.value)}
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

export default AddProduct;
