import { Request, Response } from "express";
import { getCard } from "../services/cardServices";

export async function showCard(req: Request, res: Response) {
    const cardId: number = Number(req.params.id);
    const balanceAndTransactions = await getCard(cardId);
    return res.status(200).send(balanceAndTransactions);
}