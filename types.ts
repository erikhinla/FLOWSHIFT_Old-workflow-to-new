
export interface WorkflowTask {
  label: string;
  duration?: string;
  cost?: string;
}

export interface PanelProps {
  title: string;
  subtitle: string;
  colorClass: string;
}

export interface EditImageResponse {
  imageUrl: string;
  description: string;
}
