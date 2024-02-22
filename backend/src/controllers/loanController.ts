import { Request, Response } from "express";

export const loan = (req: Request, res: Response) => {
  const { age, cpf, name, income, location } = req.body;

  const LOAN = {
    personal: "PERSONAL",
    guaranteed: "GUARANTEED",
    consignment: "CONSIGNMENT",
  };

  const TAX = {
    personal: 4,
    guaranteed: 3,
    consignment: 2,
  };

  const loans = [];

  if (income <= 3000) {
    loans.push({
      type: LOAN.personal,
      interest_rate: TAX.personal,
    });
  }

  if ((income > 3000 || income < 5000) && age < 30 && location === "SP") {
    loans.push(
      {
        type: LOAN.personal,
        interest_rate: TAX.personal,
      },
      {
        type: LOAN.guaranteed,
        interest_rate: TAX.guaranteed,
      }
    );
  }

  if (income >= 5000) {
    loans.push({
      type: LOAN.consignment,
      interest_rate: TAX.consignment,
    });
  }

  if (income <= 3000) {
    loans.push({
      type: LOAN.guaranteed,
      interest_rate: TAX.guaranteed,
    });
  }

  const setLoan = new Set();
  const filtered_loan = loans.filter((loan) => {
    const duplicatedLoan = setLoan.has(loan.type);
    setLoan.add(loan.type);
    return !duplicatedLoan;
  });

  res.json({
    customer: name,
    loans: filtered_loan,
  });
};
