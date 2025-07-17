import React from "react";
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
const NewProduct = () => {
  return (
    <div>
      <Dialog>
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
          <form className="space-y-6 ">
            <div className="grid grid-cols-4 items-center text-right ">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Nome do Produto"
                autoComplete="off"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center  ">
              <Label htmlFor="price">Preço</Label>
              <Input
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
              <Label htmlFor="select">Categoria</Label>
              <Select id="select">
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
            </div>

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
