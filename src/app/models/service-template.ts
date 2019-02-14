import { CategoryServiceTemplate } from "./category-service-template";

export class ServiceTemplate {
    id: string;
    name: string;
    description: string;
    value: number;
    active: boolean;
    categoriesId: string[];
    serviceProviderId: string;
}
