import datetime

hora_h = datetime.datetime(2026,11,19,0,0,0)
hora_agora = datetime.datetime.now()
hora_restante = hora_h - hora_agora
def contador():
    total_segundos = hora_restante.total_seconds()
    total_dias = int(total_segundos // 86400) 
    total_segundos = total_segundos % 86400
    total_horas = int(total_segundos // 3600)
    total_segundos = total_segundos % 3600
    total_minutos = int(total_segundos / 60)
    total_segundos = int(total_segundos % 60)
    return total_dias,total_horas,total_minutos,total_segundos


