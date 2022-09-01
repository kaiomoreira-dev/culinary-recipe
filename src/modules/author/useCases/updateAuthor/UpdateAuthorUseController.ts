import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";

export class UpdateAuthorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, newName, whatsapp } = request.body;

        const updateAuthorUseCase = container.resolve(UpdateAuthorUseCase);

        const updateAuthor = await updateAuthorUseCase.execute(
            name,
            newName,
            whatsapp
        );

        return response.status(200).json(updateAuthor);
    }
}
