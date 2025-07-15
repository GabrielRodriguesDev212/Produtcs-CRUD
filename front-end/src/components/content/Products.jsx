import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table.jsx";
import { Checkbox } from "../ui/checkbox.jsx";
import { Label } from "../ui/label.jsx";
const Products = () => {
  return (
    <div className="">
      <div className="w-full max-w-7xl ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome do Produto</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Iphone 15</TableCell>
              <TableCell>20</TableCell>
              <TableCell>R$ 5300,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Iphone 16</TableCell>
              <TableCell>5</TableCell>
              <TableCell>R$ 7500,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Galaxy S25</TableCell>
              <TableCell>20</TableCell>
              <TableCell>R$ 5500,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableCell colSpan={3}>Total:</TableCell>
            <TableCell>R$: 55.000,00</TableCell>
          </TableFooter>
        </Table>

        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>
    </div>
  );
};

export default Products;
