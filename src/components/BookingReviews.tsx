import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  name: string;
  country: string;
  comment: string;
}

interface Category {
  name: string;
  score: number;
}

interface BookingReviewsProps {
  rating: number;
  totalReviews: number;
  reviews: Review[];
  categories: Category[];
  bookingUrl: string;
}

const BookingReviews = ({ rating, totalReviews, reviews, categories, bookingUrl }: BookingReviewsProps) => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Opiniones de Nuestros Huéspedes
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-4xl font-bold text-foreground">{rating}</span>
          <span className="text-lg text-muted-foreground">Fantástico</span>
        </div>
        <p className="text-muted-foreground">Basado en {totalReviews} comentarios verificados de Booking.com</p>
      </div>

      {/* Categorías de puntuación */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
        {categories.map((category) => (
          <div key={category.name} className="flex justify-between items-center bg-muted/50 rounded-lg p-3">
            <span className="text-sm font-medium text-foreground">{category.name}</span>
            <span className="text-lg font-bold text-nature-green">{category.score}</span>
          </div>
        ))}
      </div>

      {/* Reseñas */}
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.country}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.comment}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <a 
          href={bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-nature-green hover:text-nature-forest transition-colors font-medium"
        >
          Ver todas las reseñas en Booking.com →
        </a>
      </div>
    </div>
  );
};

export default BookingReviews;
