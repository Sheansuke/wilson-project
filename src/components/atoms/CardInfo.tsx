export const CardInfo = ({ title, value }: { title: string; value: any }) => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-xl font-bold text-gray-950">{title}: </h2> <p className="text-gray-700">{value}</p>
    </div>
  );
};
