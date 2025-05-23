
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Comment {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente serviço! Consegui economizar muito comprando produtos próximos ao vencimento. Qualidade impecável!",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "João Santos",
      rating: 4,
      comment: "Muito bom o conceito. Ajuda tanto a economizar quanto a reduzir o desperdício de alimentos.",
      date: "2024-01-10"
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.comment) {
      const comment: Comment = {
        id: Date.now(),
        name: newComment.name,
        rating: newComment.rating,
        comment: newComment.comment,
        date: new Date().toISOString().split('T')[0]
      };
      setComments([comment, ...comments]);
      setNewComment({ name: "", rating: 5, comment: "" });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Comentários e Avaliações</h1>
          <p className="text-gray-600">Compartilhe sua experiência com o PrazoCerto</p>
        </div>

        {/* Formulário para novo comentário */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2" />
              Deixe seu comentário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={newComment.name}
                  onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Avaliação</label>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 cursor-pointer ${
                        i < newComment.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => setNewComment(prev => ({ ...prev, rating: i + 1 }))}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <Textarea
                  placeholder="Escreva seu comentário aqui..."
                  value={newComment.comment}
                  onChange={(e) => setNewComment(prev => ({ ...prev, comment: e.target.value }))}
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Publicar Comentário
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Lista de comentários */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                    <div className="flex items-center mt-1">
                      {renderStars(comment.rating)}
                      <span className="ml-2 text-sm text-gray-500">{comment.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Comments;
