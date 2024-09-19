const prefix = process.env.BASE_PATH || "" + (process.env.NODE_ENV=="development") ? "" : "/asimsoft_website";

export { prefix };