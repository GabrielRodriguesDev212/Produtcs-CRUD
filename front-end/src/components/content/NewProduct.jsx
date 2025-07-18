import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.jsx";
import { PlusCircle } from "lucide-react";
import { Label } from "../ui/label.jsx";
import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input.jsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select.jsx";
import axios from "axios";
const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/products", {
        nameProduct: name,
        priceProduct: price,
        quantityProduct: quantity,
      });
      setName("");
      setPrice("");
      setQuantity("");

      setOpen(false);
    } catch (error) {
      console.log("Erro ao criar o produto", error);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <PlusCircle className="w-4 h-4 mr-1" />
            Novo Produto
          </Button>
        </DialogTrigger>

        <DialogContent className={"dark:bg-zinc-900 w-full  "}>
          <DialogHeader>
            <DialogTitle className={"text-2xl"}>
              Cadastro de Produto
            </DialogTitle>
            <DialogDescription>
              Digite as informações do Produto
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-6 " onSubmit={createProduct}>
            <div className="grid grid-cols-4 items-center text-right ">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Nome do Produto"
                autoComplete="off"
                className="col-span-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center  ">
              <Label htmlFor="price">Preço</Label>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoComplete="off"
                type="number"
                id="price"
                placeholder="Preço R$ 1900,00"
                className={
                  "col-span-3 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center  ">
              <Label htmlFor="quantity">Quantidade</Label>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                autoComplete="off"
                type="number"
                id="quantity"
                placeholder="5"
                className={
                  "col-span-3 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                }
              />
            </div>

            {/* <div className="grid grid-cols-4 items-center  ">
              <Label htmlFor="select">Categoria</Label>
              <Select
                id="select"
                value={category}
                onValueChange={(value) => setCategory(value)}
              >
                <SelectTrigger className="col-span-3 w-full">
                  <SelectValue placeholder="Categoria"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos</SelectLabel>
                    <SelectItem value="celular">Celular</SelectItem>
                    <SelectItem value="roupa">Roupa</SelectItem>
                    <SelectItem value="tenis">Tênis</SelectItem>
                    <SelectItem value="acessorios">Acessórios</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> */}

            <DialogFooter>
              <DialogClose asChild className={"py-2"}>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewProduct;
