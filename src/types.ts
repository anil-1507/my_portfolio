export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};