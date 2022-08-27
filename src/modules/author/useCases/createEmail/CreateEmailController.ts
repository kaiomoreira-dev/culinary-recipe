import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateEmailUseCase } from "./CreateEmailUseCase";

export class CreateEmailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { e_mail, author_name } = request.body;

        const createEmailUseCase = container.resolve(CreateEmailUseCase);

        const email = await createEmailUseCase.execute({ e_mail, author_name });

        return response.status(200).json(email);
    }
}
