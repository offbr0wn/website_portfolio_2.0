export interface ArrayDataItem {
  data: string;
  projectLink?: string;
  projectName: string;
  descList: string[];
  skillList: string[];
}

export interface EducationItem {
  data: string;
  projectName: string;
  projectLink?: string;
  descList: string[];
}

export interface Item {
  title: string;
  description: string;
  header?: string;
  className: string;
  icon?: React.ReactElement;
  link?: string;
}

export interface ExperienceProps {
  experience: ArrayDataItem | EducationItem;
}
