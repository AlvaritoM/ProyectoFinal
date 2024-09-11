import { IActivityRepository } from "../repositories/IActivityRepository";
import { CreateActivityDTO } from "../dtos/CreateActivityDTO";
import { IActivity } from "../entities/activity";

export class CreateActivityUseCase {
  constructor(private activityRepository: IActivityRepository) {}

  async execute(data: CreateActivityDTO): Promise<IActivity> {
    const newActivity = await this.activityRepository.create({
      title: data.title,
      description: data.description,
      startActivity: data.startActivity,
      endActivity: data.endActivity,
      capacity: data.capacity,
      groupId: data.groupId,
    });

    return newActivity;
  }
}
