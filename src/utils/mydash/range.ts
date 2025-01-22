export function range(start?: number, end?: number, step?: number): number[] {
	// Если передан только один аргумент, это значение `end`, начинаем с 0
	if (end === undefined && start !== undefined) {
	  end = start;
	  start = 0;
	}
  
	// Значения по умолчанию
	start = start ?? 0; // Начинаем с 0
	end = end ?? 0;     // Завершаем на 0
	step = step === undefined || step === 0 ? (start < end ? 1 : -1) : step; // Шаг по умолчанию 1 или -1
  
	// Если шаг не позволяет двигаться к концу, возвращаем пустой массив
	if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
	  return [];
	}
  
	const result: number[] = [];
	for (let i = start; step > 0 ? i < end : i > end; i += step) {
	  result.push(i);
	}
  
	return result;
  }