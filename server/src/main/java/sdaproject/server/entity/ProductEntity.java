package sdaproject.server.entity;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
public class ProductEntity extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "product_category_id")
    private ProductCategoryEntity productCategoryEntity;


    @Column
    private String name;

    @Column
    private String description;

    @Column
    private BigDecimal price;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductCategoryEntity getProductCategoryEntity() {
        return productCategoryEntity;
    }

    public void setProductCategoryEntity(ProductCategoryEntity productCategoryEntity) {
        this.productCategoryEntity = productCategoryEntity;
    }
}
