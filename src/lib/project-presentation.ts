export const projectModalId = (slug: string): string => `project-${slug}`;

export const projectTitleId = (slug: string): string =>
  `${projectModalId(slug)}-title`;

export const formatIndex = (index: number): string =>
  String(index + 1).padStart(2, "0");
