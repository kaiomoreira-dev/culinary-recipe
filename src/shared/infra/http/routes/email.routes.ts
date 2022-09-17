import { CreateEmailController } from "@modules/author/useCases/createEmail/CreateEmailController";
import { DeleteEmailController } from "@modules/author/useCases/deleteEmail/DeleteEmailController";
import { ListEmailsController } from "@modules/author/useCases/listEmails/ListEmailsController";
import { UpdateE_mailByE_mailController } from "@modules/author/useCases/updateEmail/UpdateE_mailByE_mailController";
import { Router } from "express";

export const emailRoutes = Router();

const createEmailController = new CreateEmailController();

const listEmailsController = new ListEmailsController();

const deleteEmailController = new DeleteEmailController();

const updateE_mailByE_mailController = new UpdateE_mailByE_mailController();

emailRoutes.post("/", createEmailController.handle);

emailRoutes.get("/", listEmailsController.handle);

emailRoutes.delete("/delete", deleteEmailController.handle);

emailRoutes.patch("/update", updateE_mailByE_mailController.handle);
