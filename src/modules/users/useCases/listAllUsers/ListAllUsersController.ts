import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id: user1_id } = request.headers;

        const user_id = String(user1_id);

        try {
            const allUsers = this.listAllUsersUseCase.execute({ user_id });

            return response.json(allUsers);
        } catch (error) {
            return response.status(400).json({ error: "User not found" });
        }
    }
}

export { ListAllUsersController };
