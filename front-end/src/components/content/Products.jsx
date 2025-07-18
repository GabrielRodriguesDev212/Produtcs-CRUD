import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table.jsx";

import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input.jsx";
import { Edit, Search, Trash2 } from "lucide-react";

import { Link } from "react-router-dom";
import NewProduct from "./NewProduct.jsx";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/products");

      setProducts(data);
    };
    axiosGet();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className=" text-left text-4xl font-extrabold tracking-tight text-balance dark:text-gray-200">
          Cadastro de Produtos
        </h1>

        <p className="text-muted-foreground 2">Cadastre seus produtos aqui</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <form className="grid sm:grid-cols-3 gap-2 w-full  ">
          <Input name="id" placeholder="ID do produto" className="w-full" />
          <Input name="name" placeholder="Nome do produto" className="w-full" />
          <Button type="submit" variant="outline" className={"mr-2"}>
            <Search className="w-4 h-4 mr-1" />
            Filtrar Resultados
          </Button>
        </form>
        <NewProduct products={products} setProducts={setProducts} />
      </div>

      <div className="border-2 border-zinc-600  rounded-2xl ">
        <Table
          className={
            "text-center rounded-2xl overflow-hidden  p-4 dark:bg-zinc-900"
          }
        >
          <TableHeader>
            <TableRow className={"text-lg "}>
              <TableHead className={"text-center py-4"}>ID</TableHead>
              <TableHead className={"text-center  py-4 "}>Produtos</TableHead>
              <TableHead className={"text-center  py-4"}>Preços</TableHead>
              <TableHead className={"text-center  py-4"}>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {products.map((product, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    R$ {product.price.toLocaleString("pt-BR")}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center justify-center gap-4">
                      <Link
                        to={`/edit/${product.id}`}
                        variant="ghost"
                        size="icon"
                        className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:scale-110 transition-all duration-200 border border-blue-500/20 hover:border-blue-400/40 shadow-lg hover:shadow-blue-500/25"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 hover:scale-110 transition-all duration-200 border border-red-500/20 hover:border-red-400/40 shadow-lg hover:shadow-red-500/25"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={3}
                className={"text-left text-lg px-5  py-3 "}
              >
                Total
              </TableCell>
              <TableCell className=" py-3 text-lg ">R$ 55.000,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Products;
