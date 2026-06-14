import axiosInstance from "./axiosConfig";

export const analyzeStartup = async (
  startupIdea
) => {
  const response =
    await axiosInstance.post(
      "/verdict/analyze",
      {
        startupIdea,
      }
    );

  return response.data;
};