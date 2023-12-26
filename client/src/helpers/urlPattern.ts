function urlPattern(pattern: string, slug: number | string) {
  return pattern.replace("{}", slug.toString());
}

export default urlPattern;
