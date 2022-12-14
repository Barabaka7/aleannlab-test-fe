export interface Job {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: {
    lat: string;
    long: string;
  };
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
}
