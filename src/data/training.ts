// January 2021 training log, as written at the time (Sunday through Saturday). Migrated from the old /training/ table.

export type Day = { date: string; text: string; kind?: "rest" | "best" };
export type Week = { start: string; miles: number; days: Day[] };

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
export const dayName = (i: number) => DOW[i] ?? "";

export const monthlyMiles = 369;
export const weeklyAverage = 85;

export const weeks: Week[] = [
  {
    start: "Dec 27",
    miles: 67,
    days: [
      { date: "27", text: "18 miles @7:49 average" },
      { date: "28", text: "10 miles @6:19 average + Core" },
      { date: "29", text: "WU + 4 miles threshold (19:48 through 4 miles, then called it)" },
      { date: "30", text: "Off", kind: "rest" },
      { date: "31", text: "70 minutes @7:18 average + Core" },
      { date: "1", text: "10 miles @6:47 + 6x30 second hill sprints + Core" },
      { date: "2", text: "12 miles @6:16 pace" },
    ],
  },
  {
    start: "Jan 3",
    miles: 90,
    days: [
      { date: "3", text: "15 miles @6:45 on the LA River bike path" },
      { date: "4", text: "10 miles @6:42 + 4 strides + Core" },
      { date: "5", text: "6 mile threshold (29:54) + 400 (57), 300 (43). 12 miles total + Core" },
      { date: "6", text: "Medium long: 90 minutes @6:30 pace + Core" },
      { date: "7", text: "AM: 70 minutes\nPM: 5 mile double + Core" },
      { date: "8", text: "Hard run up Brown Mountain (12 miles)" },
      { date: "9", text: "10 miles @7:00 pace + 4 strides" },
    ],
  },
  {
    start: "Jan 10",
    miles: 90,
    days: [
      { date: "10", text: "18 miles @6:14 pace + Core" },
      { date: "11", text: "10 miles @6:51 + 4 strides + Core" },
      {
        date: "12",
        text: 'Track: 8x600m w/ 200m jog (1:40.8 average) + 4x400m at mile pace w/ 90" (60, 60, 60, 61). 10.54 miles total',
      },
      { date: "13", text: "Medium long, 85 to 90 minutes. Actual: 14.38 miles @6:15 pace + Core" },
      { date: "14", text: "AM: 70 minutes (9.4 miles) + 4 strides\nPM: 5.22 mile double. 14.62 miles total + Core" },
      { date: "15", text: "70 minutes (10 miles) + 8x30 second hill sprints. 12 miles total + Core" },
      { date: "16", text: "70 minutes. Actual: 10.13 miles @7:36 average, 1:17:04" },
    ],
  },
  {
    start: "Jan 17",
    miles: 68,
    days: [
      {
        date: "17",
        text: "Long run, 2 hours or 18 miles. Actual: 18 miles in 2:09:04 (7:10 average) up Brown Mountain",
      },
      { date: "18", text: "Day off + Core", kind: "rest" },
      { date: "19", text: "6 mile threshold (29:43) + 4x150m (20, 20, 20, 19). 12.35 miles total + Core" },
      { date: "20", text: "Medium long, 85 to 90 minutes + Core" },
      { date: "21", text: "AM: 70 minutes + 4 strides\nPM: 5 mile double + Core" },
      { date: "22", text: "Hard run up Brown Mountain, cut short. Legs very tired. 8 miles" },
      { date: "23", text: "Easy 4 miles. Knee very tight" },
    ],
  },
  {
    start: "Jan 24",
    miles: 63,
    days: [
      { date: "24", text: "Modified long run: 15 miles @6:52 with Vahagn. Limping afterwards" },
      { date: "25", text: "Rest day. Difficulty getting out of bed and walking.", kind: "rest" },
      {
        date: "26",
        text: "7 mile bike ride from the house. Knee almost healed; cupping and compression helped a lot + Core",
      },
      { date: "27", text: "8 miles easy, 6:50s + Core" },
      { date: "28", text: "AM: 3 miles from the house\nPM: 7 miles @5:38 average from the house" },
      { date: "29", text: "AM: 10 miles @6:22 average\nPM: 3 miles @5:58 average" },
      {
        date: "30",
        text: "15 miles @5:25 average. Really good day. Something just clicked. Body also probably appreciated a little downtime.",
        kind: "best",
      },
    ],
  },
  {
    start: "Jan 31",
    miles: 70,
    days: [
      { date: "31", text: "AM: 10 miles @6:48 average" },
      { date: "1", text: "AM: 3 miles @6:07 average\nPM: 8 miles @6:46 average" },
      {
        date: "2",
        text: "2.5 WU, mile reps: 4:36, 4:34, then 1400m of the next @4:32 pace and called it. Wimped out. Helped pace Mom for the rest of her workout. 10 miles for the day",
      },
      { date: "3", text: "Off", kind: "rest" },
      { date: "4", text: "9 miles @6:49 average" },
      {
        date: "5",
        text: "AM: 3.76 mile shakeout\nPM: 2.5 WU, 4x mile: 4:36, 4:35, 4:35, 4:27, 2.5 CD. Good workout. Modified Tuesday's session and gave it another go. Training is difficult but you have to keep your head on straight through the downs, give your body the rest it needs, and keep showing up.",
      },
      { date: "6", text: "AM: 8 miles @6:50 average" },
    ],
  },
];

export const peakMiles = Math.max(...weeks.map((w) => w.miles));
