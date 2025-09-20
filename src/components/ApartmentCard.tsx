interface ApartmentCardProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const ApartmentCard = ({ image, title, description, reverse = false }: ApartmentCardProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 py-16`}>
      <div className="lg:w-1/2">
        <img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover rounded-lg shadow-card-nature"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-6 text-foreground">{title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ApartmentCard;