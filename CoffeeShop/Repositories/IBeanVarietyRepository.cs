using CoffeeShop.Models;

namespace CoffeeShop.Repositories
{
    public interface IBeanVarietyRepository
    {
        List<BeanVariety> GetAll();
        BeanVariety Get(int id);
        void Add(BeanVariety beanVariety);
        void Update(BeanVariety beanVariety);
        void Delete(int id);    
    }
}