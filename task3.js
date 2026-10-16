function buildDoctorMessage(appointment) {
    return `🏥 Запись к врачу успешно оформлена!\n` +
           `👨‍⚕️ Доктор: ${appointment.doctor}\n` +
           `📅 Дата: ${appointment.date}\n` +
           `⏰ Время: ${appointment.time}\n` +
           `🚪 Кабинет: ${appointment.room}`;
}
console.log(buildDoctorMessage({ doctor: "Иванов И.И. (Терапевт)", date: "16.10.2026", time: "14:30", room: "305" }));
