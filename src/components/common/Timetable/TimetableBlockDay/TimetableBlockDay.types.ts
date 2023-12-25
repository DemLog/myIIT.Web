enum SubjectType {
    Unknown = "Неизвестно",
    Lecture = "Лекция",
    Practice = "Практика"
}

enum DayWeek {
    Monday = "Понедельник",
    Tuesday = "Вторник",
    Wednesday = "Среда",
    Thursday = "Четверг",
    Friday = "Пятница",
    Saturday = "Суббота",
    Sunday = "Воскресенье"
}

enum Subgroup {
    All = 0,
    First,
    Second
}

export interface TimetableBlockDayProps {
    data: Array<
    {
        "id": number,
        "subject": {
            "title": string,
            "type": SubjectType,
        },
        "groups": Array<{
            "id": number,
        }>
        ,
        "isEvenWeek": boolean,
        "lecture": Array<
            {
                "lastName": string,
                "firstName": string,
                "patronymic": string,
                "position": string,
            }>
        ,
        "cabinet": string,
        "dayWeek": DayWeek,
        "subgroup": Subgroup,
        "time": {
            "number": number,
            "startTime": Date,
            "endTime": Date,
        }
    }
> | undefined
}