import { STRINGS } from "../../shared";

export const passErr = {
    0: STRINGS.PASSWORD_ERROR,
    1: STRINGS.PASSWORD_BETTER,
    2: STRINGS.PASSWORD_STRONG,
}

export const progressBarData = (progress,strength,progressColor) => {
    return [
      {
        progress: progress.error,
        barColor: progressColor,
      },
      {
        progress: progress.better,
        barColor: strength >= 1 ? progressColor : '#FAFAFA33',
      },
      {
        progress: progress.strong,
        barColor: strength >= 2 ? progressColor : '#FAFAFA33',
      },
    ];
  };